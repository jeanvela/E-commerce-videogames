
interface Props { _id: string, title: string, price: number, image: string, platform: string[]}
// ! textear
const CardProducts = ({_id, title, price, image, platform}: Props): JSX.Element => {
    return (
        <div id={_id}>
            <p>{title}</p>
            <span>{price}</span>
            <img src={image} alt={title} />
            <span>{platform}</span>
        </div>
    )
}

export default CardProducts