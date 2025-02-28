import cls from './ScreenWarning.module.scss';

export const ScreenWarning = () => {

  return (
    <div className={cls.wrapper}>
      <p>Приложение доступно только на экранах &gt;= 768 px</p>
      <p>
        Поверните экран или воспользуйтесь устройством с более широким экраном
      </p>
    </div>
  );
};
