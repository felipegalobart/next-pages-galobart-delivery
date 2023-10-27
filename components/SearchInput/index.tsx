import { useState } from 'react'
import styles from './SearchInput.module.css'

type Props = {
    mainColor: string;
    onSearch: (searchValue: string) => void;
}

export const SearchInput = ({mainColor, onSearch}: Props) => {

    const [focused, setFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(searchValue);
        }
    }

    return (
        <div 
        className={styles.container}
        style={{ borderColor: focused ? mainColor : 'white' }}
        > 
            <div 
            className={styles.button}
            onClick={()=>onSearch(searchValue)}
            >

            </div>
            <input 
            type="text" 
            className={styles.input} 
            placeholder="Digite o que procura"
            onFocus={()=>setFocused(true)}
            onBlur={()=>setFocused(false)}
            onKeyUp={handleKeyUp}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            />
        </div>
            

    )

    
}