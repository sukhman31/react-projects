import React, { useState, ChangeEvent } from 'react';

type listElement = {
  id: number,
  task: string
}

function App(): JSX.Element {
  let [task, setTask] = useState<string>('');
  let [toDoList, setToDoList] = useState<listElement[]>([]);
  let [flag, setFlag] = useState<boolean>(false);
  let [updateId, setUpdateId] = useState<number>(-1);
  let [updatedTask, setUpdatedTask] = useState<string>('');

  const defineTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }

  const taskUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdatedTask(event.target.value);
  }

  const addToList = () => {
    if(task!==""){
      let element:listElement = {
        id: toDoList.length+1,
        task: task
      };
      let newList: listElement[] = [...toDoList,element];
      setToDoList(newList);
    }
  }

  const deleteTask = (id: number) => {
    let newList: listElement[] = toDoList.filter((task)=>{
      if(task.id===id)
        return false;
      return true;
    })
    setToDoList(newList);
  }

  const updateFlag = (id: number) => {
    setUpdateId(id);
    setFlag(true);  
  }
  
  const updateTask = () => {
    let newList: listElement[] = [...toDoList];
    if (updatedTask!=='')
      newList[updateId-1].task = updatedTask;
    setToDoList(newList);
    setFlag(false);
    setUpdateId(-1);
    setUpdatedTask('');
  }

  return (
    <div className=' bg-[#845ec2] h-screen'>
      {!flag&&
      <div className='flex justify-center bg-[#0081cf] h-32 align-middle p-10'>
        <input type='text' placeholder='Enter task here' className=' border-cyan-700 border-2 input' onChange={defineTask}/>
        <button className=' border-2 border-cyan-800 bg-[#008f7a] mx-2 px-2' onClick={addToList}>Submit</button>
    </div>}
      <div className=' text-white'>
        {toDoList.map((item,idx)=>(
          <div className=' flex justify-center' key={idx}>
            <div className=' p-2 flex justify-center m-7 text-2xl font-serif'>
              {item.task}
            </div>
            <div className='flex'>
              <button className=' p-3 flex justify-center m-7 border-2 border-black bg-[#008e9b]' onClick={()=>deleteTask(item.id)}>Done</button>
              <button className=' p-3 flex justify-center my-7 border-2 border-black bg-[#008e9b]' onClick={()=>updateFlag(item.id)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
      {flag&&
      <div className='flex justify-center bg-[#d5cabd] h-32 align-middle p-10'>
      <input type='text' placeholder='Enter updated task here' className=' border-cyan-700 border-2 input' onChange={taskUpdate}/>
      <button className=' border-2 border-cyan-800 bg-[#008f7a] mx-2 px-2' onClick={updateTask} >Submit</button>
    </div>}
    </div>
  );
}

export default App;
