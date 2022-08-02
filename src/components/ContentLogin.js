export default function ContentLogin(props) {
    return(
        <div>
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                {props.children[0]}
            </form>
            {props.children[1]}
        </div>
    )
}