import classNames from 'classnames';
import { TagProps } from './Tag.props';
import style from './Tag.module.css';

export const Tag = ({ children, size = 's', color = 'default', href, className, ...props }: TagProps): JSX.Element => {
  const tagClass = classNames(style.tag, className, {
    [style.s]: size === 's',
    [style.m]: size === 'm',
    [style.default]: color === 'default',
    [style.red]: color === 'red',
    [style.green]: color === 'green',
    [style.primary]: color === 'primary',
    [style.gray]: color === 'gray',
  });
  return (
    <div className={tagClass} {...props}>
      {
        href
          ? <a href={href}>{ children }</a>
          : <>{ children }</>
      }
    </div>
  );
};