import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StatisticsItem } from './StatisticsData';
import { randomColor } from './randomColor';

const Statistics = ({ stat, title }) => {
  return (
    <StatisticsSection>
      {title ? <Title>{title}</Title> : ''}
      <StatisticsList>
        {stat.map(({ id, label, percentage }) => (
          <StatisticsItem
            key={id}
            label={label}
            percentage={percentage}
            color={randomColor}
          />
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};
const StatisticsSection = styled.section`
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  padding-top: 20px;
`;
const Title = styled.h2`
  text-align: center;
  color: rgb(198, 198, 198);
`;
const StatisticsList = styled.ul`
  display: flex;
  padding: 0;
`;

export default Statistics;

Statistics.protoType = {
  stat: PropTypes.array.isRequired,
  title: PropTypes.string,
};
