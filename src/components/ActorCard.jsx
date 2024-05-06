import { baseImgUrl } from "../utils/constants"

const ActorCard = ({actor}) => {
const url = !actor.profile_path ? '/default-foto.jpeg' : baseImgUrl + actor.profile_path;

  return (
    <div className="w-[160px] line-clamp-1">
        <img className="h-[175px] w-[120px] object-cover " src={url} alt={actor.name} />
    <h2>{actor.orginal_name} </h2>
    <h2 className="line-clamp-1">{actor.character}</h2>
    </div>
  )
}

export default ActorCard
