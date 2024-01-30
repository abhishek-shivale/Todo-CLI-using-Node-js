
import Conf  from  'conf'
import chalk from  'chalk'

const conf = new Conf({projectName: 'TodoList'});

function markDone ({tasks}){
    let TodoList = conf.get('todo-list')
    if(TodoList){
        TodoList = TodoList.map((task,index)=>{
            if(tasks.indexOf(index.toString())!== -1){
                task.done = true
            }
            else{
                task.done = true
            }
            return task
        })
        conf.set('todo-list',TodoList)
    }
    console.log(chalk.green.bold('Tasks have been marked as done successfully!'))

}
export default markDone