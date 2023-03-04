import styled from 'styled-components';
import { ProfileDescription } from './ProfileDescription';
import user from '../../data/user.json';
import { ProfileItem } from './ProfileItem';

export const Profile = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <Container>
      <ProfileDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats>
        <ProfileItem lable="Follovers" stats={stats.followers} />
        <ProfileItem lable="Views" stats={stats.views} />
        <ProfileItem lable="Likes" stats={stats.likes} />
      </Stats>
    </Container>
  );
};

const Stats = styled.ul`
  padding: 20px;
  display: flex;
  background-color: rgb(220, 238, 255);
  margin-bottom: 0;
  justify-content: space-between;
`;

const Container = styled.div`
  background-color: #fcfcfc;
  border: 2px solid #111;
  text-align: center;
  max-width: 400px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  color: #afb1b8;
  padding: 10px;
  margin-bottom: 40px;
`;
