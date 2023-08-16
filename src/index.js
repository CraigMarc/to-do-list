import module1 from './module1';
import './styles.css';
import todoFactory from './factoryfunct';

module1()
console.log('hello')

let project1 = todoFactory('project1', 'new thing', '11/1/2023', 'high')
console.log(project1)