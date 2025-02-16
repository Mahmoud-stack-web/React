function List(){
  const fruits = [
    {id:1,name:'apple',calories:95},
    {id:2,name:'orange',calories:45},
    {id:3,name:'banana',calories:105},
    {id:4,name:'coconut',calories:159},
    {id:5,name:'pineapple',calories:37}];
   
    const lowCalFruit = fruits.filter((fruit)=>{
      return(
        fruit.calories < 100
      )
    })
    const highCalFruit = fruits.filter((fruit)=>{
      return(
        fruit.calories>100
      )
    })
    const listItemsLow = lowCalFruit.map((fruit) =>{
      return(
        <>
            <li key={fruit.id}>
              {fruit.name}:&nbsp;
              <b>{fruit.calories}</b>
            </li>
          </>
      );
    })
    
    const listItemsHigh = highCalFruit.map((fruit) =>{
      return(
        <>  
            <li key={fruit.id}>
              {fruit.name}:&nbsp;
              <b>{fruit.calories}</b>
            </li>
          </>
      );
    })
    return(
      <>
      <ul>{listItemsLow}</ul>
      <ul>{listItemsHigh}</ul>
      </>
    )

}
export default List;