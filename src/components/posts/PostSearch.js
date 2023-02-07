export const PostSearch = ({ setterFunction }) => {
    return (
        <div className="search">
            <input className="search"
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
            type="text" placeholder="Search By Title" />
        </div>
    )
}