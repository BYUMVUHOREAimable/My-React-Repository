const ProfileComponent = ({ name, profession, accomplishment }) => {
    return <p>
        <b>{name}:</b>
        {' ' + profession + ' '}
        known for {accomplishment}
    </p>
}

export default ProfileComponent