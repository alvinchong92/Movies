import React from 'react';

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localContent: this.props.content || '',
    }
    this.handleDeleteClick=this.handleDeleteClick.bind(this);
    this.handleEditofContent=this.handleEditofContent.bind(this);
  }


  handleDeleteClick() {
    this.props.handleDelete(this.props.id);
  }

  handleEditofContent(e) {
    e.preventDefault();
    this.props.handlePublish({
      id: this.props.id,
      content: this.state.localContent,
    })
  }


  render() {
    console.log(this.props)
    return(
      <div id="content">
        <div>
        {this.props.content.content}
          <div id="button">
          <button className="button" onClick={this.handleDeleteClick}>x</button>
          </div>
        </div>
      </div>
    )
  }
}

export default PostItem;
