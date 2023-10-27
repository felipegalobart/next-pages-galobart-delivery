import { SearchInput } from '@/components/SearchInput';
import styles from '../../styles/Home.module.css';

const Home = () => {

    const handleSearch = (searchValue: string) => {
        console.log(searchValue);
    }
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerTop}>
                    <div className={styles.headerTopLeft}>
                        <div className={styles.headerTitle}>Seja Bem Vindo (a) 👋</div>
                        <div className={styles.headerSubtitle}>O que deseja para hoje?</div>
                    </div>
                    <div className={styles.headerTopRight}>
                        <div className={styles.menuButtom}>
                            <div className={styles.menuButtomLine}></div>
                            <div className={styles.menuButtomLine}></div>
                            <div className={styles.menuButtomLine}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.headerBottom}>
                    <SearchInput 
                        mainColor='orange'
                        onSearch={handleSearch}
                    />
                </div>
            </header>
        </div>
    );
}

export default Home;