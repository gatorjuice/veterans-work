class Review extends React.Component {

  constructor(props) {
    super(props)
    this.data = this.binding.data(this)
    this.state = {
      id: props.review.id,
      body: props.review.body,
      companyId: props.review.company_id,
      customer: props.customer,
      selectedStars: props.review.stars,
      totalStars: 5,
      unselectedStars: (5 - props.review.stars),
      createdAt: props.review.created_at,
      updatedAt: props.review.updated_at,
      testItems: [
        "<span class='glyphicon glyphicon-star' aria-hidden='true'></span>",
        "<span class='glyphicon glyphicon-star' aria-hidden='true'></span>",
        "<span class='glyphicon glyphicon-star' aria-hidden='true'></span>",
        "<span class='glyphicon glyphicon-star' aria-hidden='true'></span>",
        "<span class='glyphicon glyphicon-star' aria-hidden='true'></span>",
      ]
    }
  }

  componentDidMount() {
    fetch.get('/api/v1/people', (req, res) => {
      this.data = res;
    })
    console.log('review mounted')
  }

  render() {
    return(
      <div>
        {this.state.testItems.map((testItem, index) => (
          <span key={index} onClick={() => this.handleClick(index)}>{testItem}</span>
        ))}
        <h3 className="well">{this.state.selectedStars} Stars</h3>
        <p onClick={this.handleClick}> "{this.state.body}" -{this.state.customer.email} </p>
        <p>{this.state.created_at}</p>
      </div>
    )
  }

  handleClick(starIndex) {
    console.log(starIndex)
    let testItems = this.state.testItem;
    let selectedStars = this.state.selectedStars;
    testItems = [];
    for (let i = 0; i < (starIndex + 1); i++ ) {
      testItems.push("star");
    }
    selectedStars = testItems.length;
    this.setState({
      testItems,
      selectedStars
    })
    app.post('/')
    console.log("clicked");
  }
}

