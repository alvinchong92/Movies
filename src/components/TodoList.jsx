import React from 'react';
import PostItem from '../components/Postitem.jsx';

class TodoList extends React.Component {
  render() {
    const postElements=this.props.posts.map((post,idx) => {
      return(
        <div key={idx}>
          <PostItem
            key={idx}
            handleDelete={this.props.handleDelete}
            handlePublish={this.props.handlePublish}
            content={post.content}
            id={post.id}
          />
        </div>
      );
    });
    return(
      <ul>
        {postElements}
      </ul>
    )
  }
}

export default TodoList;
