// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {initial: 0}

  onIncrement = () => {
    this.setState(prevState => ({initial: prevState.initial + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({initial: prevState.initial - 1}))
  }

  render() {
    const {reviewsList} = this.props
    let {initial} = this.state
    console.log(`initial :${initial}`)
    // console.log(`reviewsList : ${reviewsList}`)
    // console.log(`length :${reviewsList.length}`)
    if (initial >= reviewsList.length) {
      initial = 3
    } else if (initial < 0) {
      initial = 0
    }
    const displayResult = reviewsList[initial]
    // console.log(displayResult)
    const {imgUrl, username, companyName, description} = displayResult
    return (
      <div className="bg_container">
        <h1 className="main_heading">Reviews</h1>
        <div className="container">
          <button
            data-testid="leftArrow"
            onClick={this.onDecrement}
            className="button"
            type="button"
          >
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review_container">
            <img className="review_image" src={imgUrl} alt={username} />
            <p className="review_heading">{username}</p>
            <p className="review_designation">{companyName}</p>
            <p className="review_description">{description}</p>
          </div>
          <button
            data-testid="rightArrow"
            onClick={this.onIncrement}
            className="button"
            type="button"
          >
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
