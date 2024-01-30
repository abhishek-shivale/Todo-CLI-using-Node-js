
import Conf  from  'conf'
import chalk from  'chalk'

const conf = new Conf({projectName: 'TodoList'});



function list(){
    const TodoList = conf.get('todo-list')

    if(TodoList && TodoList.length){
        console.log(chalk.blue.bold('Task in green are done. Task in yellow are still not done'))
        
        TodoList.forEach((task, index)=>{
            if(task.done){
                console.log((chalk.greenBright(`${index}. ${task.text}`)))
            }else{
                console.log((chalk.yellowBright(`${index}. ${task.text}`)))
            }
        });
    
    }else{
    console.log(console.log(chalk.red.bold('You don\'t have any tasks yet.')))
}

}

export default list