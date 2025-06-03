import { VMDetails } from './VMDetails';
import { VolumeDetails } from './VolumeDetails';
import { PrimaryIPDetails } from './PrimaryIPDetails';

interface ResourceDetailsProps {
  resourceType: string;
  data: any;
  classes: Record<string, string>;
}

export const ResourceDetails = ({
  resourceType,
  data,
  classes,
}: ResourceDetailsProps) => {
  if (resourceType === 'virtual_machine') {
    return <VMDetails data={data} classes={classes} />;
  }

  if (resourceType === 'volume') {
    return <VolumeDetails data={data} classes={classes} />;
  }

  if (resourceType === 'primary_ip') {
    return <PrimaryIPDetails data={data} classes={classes} />;
  }

  return null;
};
