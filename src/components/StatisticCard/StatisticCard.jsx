import { Box, Typography } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';

const StatisticCard = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const { number } = useSpring({
    from: { number: 0 },
    number: count,
    delay: 200,
    config: { mass: 1, tension: 10, friction: 5 },
  });

  useEffect(() => {
    setCount(value);
  }, [value]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 2,
        border: '1px solid #eaeaea',
        borderRadius: '8px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <animated.div style={{ color: '#0070f3', fontSize: '2rem' }}>
        {number.to(n => n.toFixed(0))}
      </animated.div>
      <Typography variant="body1" color="textSecondary">
        {label}
      </Typography>
    </Box>
  );
};

export default StatisticCard;
