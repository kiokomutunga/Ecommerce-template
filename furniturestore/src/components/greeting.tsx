type Greetingprops = {
    name: String
    age: number
};
const  Greet = (props: Greetingprops) => {
    return (
        <div>
            <h1>hi {props.name} you are {props.age} years old</h1>
        </div>

    );
}       
export default Greet;
