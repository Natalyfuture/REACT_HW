import { DataMaker } from './DataMaker';
import { Posts } from './Posts';

const POST_BASE_URL = ' https://jsonplaceholder.typicode.com/todos?_limit=10';

export const Task_3 = () => {
    return(
        <div>
            <h1>TASK 3</h1>
            <DataMaker url={POST_BASE_URL} 
            renderDataUrl={(data) => <Posts posts={data} />}
            />
        </div>
    )

}