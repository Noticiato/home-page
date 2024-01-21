import { Divider } from '@mantine/core';
import classes from './CustomDivider.module.css';

export function CustomDivider() {
  return (
    <div className={classes.spacing}>
      <Divider my="md"/>
    </div>
  );
}