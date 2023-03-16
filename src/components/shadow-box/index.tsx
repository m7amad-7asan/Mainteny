import React from 'react';

import {Box} from '@Theme';

interface Props {
  children: React.ReactNode;
  plan?: boolean;
  full?: boolean;
}

export const ShadowBox: React.FC<Props> = ({children, plan, full}) => {
  return (
    <Box
      flex={full ? 1 : undefined}
      backgroundColor="Light"
      borderRadius="m"
      padding={!plan ? 'm' : undefined}
      justifyContent="space-between"
      marginTop="m"
      marginHorizontal="m"
      shadowColor="DarkGray"
      shadowOffset={{
        width: 2,
        height: 2,
      }}
      shadowOpacity={0.1}
      shadowRadius={2.62}
      elevation={2}>
      {children}
    </Box>
  );
};
