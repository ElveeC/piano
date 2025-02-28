import cls from './Footer.module.scss';
import cn from 'classnames';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn(cls.wrapper, className)}>
      <div className={cls.info}>
        <p>Ноты регистрозависимы</p>
        <p>Для полутонов (черные клавиши) используйте верхний регистр</p>
      </div>
      <p className={cls.contact}>
        Made by {' '}
        <a className={cls['contact-link']} href='https://github.com/ElveeC'>
          ElveeC
        </a>
      </p>
    </footer>
  );
};
