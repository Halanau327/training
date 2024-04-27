export const User = () => {
    const deleteUser = () => {
        alert('user deleted')
    }

    return <div>
        <button onClick={deleteUser}>delete</button>
        <button>save</button>
    </div>
}