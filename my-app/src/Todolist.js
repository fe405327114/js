import React, { Component } from 'react';

import axios from 'axios'



	  class TodoList extends React.Component{
           constructor(props){
			   super(props);
			   this.state={
				   aList:['学习html','学习css','学习javascript','学习go语言'],
				   sTudo:''
			   };
		   }
		   componentDidMount() {
			axios({
			  url: './data.json',
			  method: 'get',
			  responsetype: 'json'
			  //    需要改成箭头函数 then(function(dat){
			}).then(dat => {
			  console.log(dat.data);
			  let list = dat.data;
			  this.setState({
				aList: list
			  })
			  //    如果出现问题  可能和 图标有关 请求 ico
			}).catch(function () {
			  alert('服务器超时！')
			})
		  }


            //ev是指事件对象
              fnChange(ev){
              this.setState({
                  sTudo:ev.target.value
              } )
          }

               //prevState指最新状态值
          fnAdd(){
              this.setState(function (prevState) {
                  if (prevState.sTudo==''){
					  alert('is null!');
					  return;
				  }
				  return {aList:[...prevState.aList,prevState.sTudo],sTudo:''};
              })
          }
		  //删除功能
		  fnDel(i){
			  this.setState(prevState=>{
				  let list =[...prevState.aList];
				  list.splice(i,1);
				  return {aList:list};
			  }
			  )
		  }
		  //上移
		  fnUp(i){
			  
			  this.setState(prevState=>{
				  if (i==0){
					  alert('is top!!')
					  return
				  }
			  let list =[...prevState.aList];
              let nowItem=list[i];
			  list.splice(i,1);
			  list.splice(i-1,0,nowItem);
			  return {aList:list};

			  }
			  )
		  }
		  //下移
		  fnDown(i){
			  
			  this.setState(prevState=>{
				  if (i==prevState.aList.length-1){
					  alert('is bottom!!')
					  return
				  }
			  let list =[...prevState.aList];
              let nowItem=list[i];
			  list.splice(i,1);
			  list.splice(i+1,0,nowItem);
			  return {aList:list};
			  }
			  )
		  }
		  

          render(){
			  return(
				
	<div className="list_con">
	    <h2>To do list</h2>
		<input type="text" name="" id="txt1" className="inputtxt" value={this.state.sTudo} onChange={this.fnChange.bind(this)} />
		<input type="button" name="" value="增加" id="btn1" className="inputbtn" onClick={this.fnAdd.bind(this)}/>
		
		<ul id="list" className="list">
             {
				 this.state.aList.map((item,i) =>

					 <li key={i}><span>{item}</span><a href="javascript:;"
					  className="up" onClick={this.fnUp.bind(this,i)}> ↑ </a><a href="javascript:;" 
					  className="down" onClick={this.fnDown.bind(this,i)}> ↓ </a><a href="javascript:;"
					   className="del" onClick={this.fnDel.bind(this,i)}>删除</a></li>
				 )
			
             }
		</ul>

	</div>

			  )
		  }


	  }

      
export default TodoList;
