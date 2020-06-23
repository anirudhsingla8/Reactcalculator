import React,{Component} from 'react';
class InputComponents extends Component{
    render(){
        let {result} = this.props;
        return(
          <div className='result'>
              <span>{result}</span>
          </div>
        );
    }
}

export default InputComponents;