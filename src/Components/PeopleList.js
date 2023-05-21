import { people } from './Data.js';
import { getImageUrl } from './Util.js';
import AvatarComponent from './AvatarComponent.js';
import ProfileComponent from './ProfileComponent.js';

const PeopleList = () => {
    const listItems = people.map(person =>
        <li style={{ listStyleType: "none" }}>
            <AvatarComponent name={person.name} imageUrl={getImageUrl(person)} />
            <ProfileComponent name={person.name} profession={person.profession} accomplishment={person.accomplishment} />
        </li>
    );
    return (
        <article>
            <h1>Scientists</h1>
            <ul>{listItems}</ul>
        </article>
    );
}
export default PeopleList