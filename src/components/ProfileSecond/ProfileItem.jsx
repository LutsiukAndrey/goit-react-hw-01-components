import styled from 'styled-components';
import PropTypes from 'prop-types';

export const ProfileItem = ({ lable, stats }) => {
  return (
    <Item>
      <Lable>{lable}</Lable>
      <Quantity>{stats}</Quantity>
    </Item>
  );
};

const Item = styled.li`
  /* width: 90px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px #000 solid;
  padding: 5px;
`;
const Lable = styled.span``;
const Quantity = styled.span`
  font-size: 20px;
  color: #111;
`;
ProfileItem.propTypes = {
  lable: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
