import Conf  from  'conf'
import chalk from  'chalk'

const conf = new Conf({projectName: 'TodoList'});
function  empty(){
    let TodoList = conf.get('todo-list')
    if(TodoList){
        let empty = TodoList
        empty = []
        TodoList = empty
        conf.set('todo-list', TodoList)
        console.log(chalk.red.bold('All Todo has been deleted successfully!'))
    }

}
export default empty