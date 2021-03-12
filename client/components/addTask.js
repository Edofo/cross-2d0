import FormData from 'FormData';

export function addTask() {
    let data = new FormData();
    data.append("content", content);
    fetch(`http://localhost:4242/api/task/add/${id}`, {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
    },
    body:data,
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log('response object:',responseJson)
    })
    .catch((error) => {
    console.error(error);
    });
}

function handleTaskFormSubmit() {

    const [formData, setForm] = React.useState({
        content: {
          value: "",
          valid: false,
          type: "textinput",
          rules: {
            isRequired: true,
          }
        }
    });

    const handleChange = (key, value) => {
        let data = formData;
        data[key].value = value;
        setForm(data);
        console.log(formData.content);
    };
    
    return (
        <View>
            <Text>Login</Text>
            <Inputs
                placeholder="Enter content"
                placeholdercolor="red"
                autoCapitalize={"none"}
                onChangeText={value => handleChange("content", value)}
                value={formData.content.value}
                type={formData.content.type}
            />
        </View>
    );
};
