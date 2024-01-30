import Conf  from  'conf'
import chalk from  'chalk'

const conf = new Conf({projectName: 'TodoList'});

function add(task){
    let TodoList = conf.get('todo-list')
    if(!TodoList){
        TodoList = []
    }

    TodoList.push({
        text: task,
        done: false
    })

    conf.set('todo-list', TodoList)

    console.log(chalk.green.bold('Task has been added successfully!'))
}
 export default add