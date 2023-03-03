import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StatisticsItem = ({ label, percentage, color }) => {
  return (
    <Item style={{ backgroundColor: color() }}>
      <Label>{label}</Label>
      <Percentage> {percentage}</Percentage>
    </Item>
  );
};

const Label = styled.span``;
const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 15px;

  border: 1px solid #111;
`;
const Percentage = styled.span`
  font-size: 30px;
`;
StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.func.isRequired,
};
