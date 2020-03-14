import { IWrapperLocalStorage } from './IWrapperLocalStarage';

class WrapperLocalStorage implements IWrapperLocalStorage
{
    public setItem(key: string, value: string): void 
    {
        localStorage.setItem(key, value);
    }

    public getItem(key: string): string | null 
    {
      return localStorage.getItem(key);
    }

    public removeItem(key: string): void
    {
       localStorage.removeItem(key);
    }
}

export {WrapperLocalStorage}