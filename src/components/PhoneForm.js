import React, { Component } from 'react';

class PhoneForm extends Component{
  state = {
    name : '',
    phone : ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    // 링크로 인한 새로고침 방지
    e.preventDefault();
    // 부모 객체로 전달
    this.props.onCreate(this.state);
    // 값 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
          />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
          />
        <div>{this.state.name} {this.state.phone}</div>
        <button type='submit'>등록</button>
      </form>
    )
  }
}

export default PhoneForm;
