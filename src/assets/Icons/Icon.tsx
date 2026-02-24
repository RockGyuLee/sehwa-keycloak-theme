import IconPassword from '@/assets/Icons/IconPassword';
import IconUser from '@/assets/Icons/IconUser';

type IconName = 'user' | 'password';

interface Props {
  iconName: IconName;
  width?: number;
  height?: number;
  color?: string;
}

const Icon = ({ iconName, width, height, color }: Props) => {
  switch (iconName) {
    case 'user':
      return <IconUser width={width} height={height} color={color} />;
    case 'password':
      return <IconPassword width={width} height={height} color={color} />;
    default:
      return null;
  }
};

export default Icon;
