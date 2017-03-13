import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localContent: this.props.content || '',
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      localContent: nextProps.content || '',
    })
    this.handleEditofContent=this.handleEditofContent.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.isSaved=this.isSaved.bind(this);
  }
  handleEditofContent(e) {
    const newContent = e.target.value;
    this.setState({
      localContent: newContent,
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePublish({
      id: this.props.id,
      content: this.state.localContent,
    });
    this.setState({ saved: true })
  }

  isSaved() {
    return this.props.content === this.state.localContent;
  }
  render() {
    let activeButtons;
    if (this.isSaved()) {
      activeButtons = (
        <div className="activeButtons">
          <button>x</button>
        </div>
      )
    }
    return(
      <div className={this.isSaved() ? 'saved': 'not-saved'}>
        <form className="post-display" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="content"
          value={this.state.localContent}
          onChange={this.handleEditofContent}
          placeholder="Todo"
        />
        </form>
        {activeButtons}
      </div>
    );
  }
}

export default Post;
