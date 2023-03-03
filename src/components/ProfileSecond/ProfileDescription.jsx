import styled from 'styled-components';
import PropTypes from 'prop-types';

export const ProfileDescription = ({ username, tag, location, avatar }) => {
  return (
    <Description>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>
  );
};
const Description = styled.div``;
const Avatar = styled.img`
  width: 150px;
  border: solid #111;
  border-radius: 50%;
`;
const Name = styled.p`
  font-size: 25px;
  color: #111;
`;
const Tag = styled.p``;
const Location = styled.p``;
ProfileDescription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
