"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const game = {
    default( props = {height: 4}){
        const piles = [[] ,[] ,[] ,[]],a = [];
        const udpiles =  [[] ,[] ,[] ,[]] , uda = [16];
        let dem = 0, save = -1 , udsave = -10;
        for (let i = 0 ;i < props.height; ++i)
            for (let j = 0 ;j < props.height; ++j)
                piles[i].push('X');
        
        let rand = Math.floor(Math.random()*10);      
        let rand1 = Math.floor(Math.random()*10);
        while(rand1+rand===2*rand1+rand){
            rand = Math.floor(Math.random()*10); 
            rand1 = Math.floor(Math.random()*10);
        }
        for( let i = 0 ; i <props.height*props.height; ++ i)
            a.push( i*rand1 + rand);    
        return { a,uda,piles,udpiles,save,udsave};
    },
 
    actions:{
        async move( state , { pos , x , y}){
            pos--; x--; y--;
            const piles = state.piles.map(v => v.slice());
            const udpiles = state.udpiles.map(v => v.slice());
            const a = state.a , uda = state.uda;
            let save = state.save , udsave = state.udsave;
            if( pos === -1 && x === -1 && y === -1){
                if(udsave === -10)
                    throw new Error("'UNDO' CHỈ ĐƯỢC 1 LẦN THÔI");
                if(save !== -1){
                    for( let i = 0 ; i < a.length ; ++ i)
                        a[i] = uda[i];
               }
                else{
                    for( let i = 0 ;i < piles.length ; ++ i)
                        for( let j = 0 ;j < piles.length ; ++ j )
                           piles[i][j] = udpiles[i][j];    
                }
                save = udsave ; udsave = -10;
            }    
            else if( save === -1) {
                if( pos === -1 || a[pos] === 'O' )
                throw new Error("CHƯA 'MOVE' ĐÃ 'TO' RỒI ");
                else{
                    udsave = save;
                    save = a[pos];
                    for( let i = 0 ; i < a.length ; ++ i)
                        uda[i] = a[i];
                    a[pos] ='O';
                }
            }
            else{
                if( x === -1 || piles[x][y] !== 'X' )
                    throw new Error("PICK 'MOVE' LẮM TEK");
                else{    
                    for( let i = 0 ;i < piles.length ; ++ i)
                        for( let j = 0 ;j < piles.length ; ++ j )
                           udpiles[i][j] = piles[i][j];
                    piles[x][y] = save;
                   udsave = save;
                   save = -1;
                }
            }
            return { a,uda,piles,udpiles,save,udsave};
        }
    },
 
    isEnding(state) {
        const piles = state.piles.map(v => v.slice());
        const height = piles.length;
        for (let i = 0 ;i < height; ++i)
            for (let j = 0 ;j < height ; ++j)
                if(piles[i][j] === 'X') return "CONTINUE";
        let res = 0 ,val1 = 0 ,val2 = 0;
        for (let i = 0 ;i < height; ++i){
            let sum = 0;
            for (let j = 0 ;j < height ; ++j){
                sum += piles[i][j];
                if( i === j) val1 += piles[i][j];
                if( i + j + 1 === height) val2 += piles[i][j];
            }
            if(res === 0)  res = sum ;
            else if( res !== sum) return "YOU LOSS. ẤN F5 ĐỂ CHƠI LẠI";
        }
        if( res !== val1 || res !== val2) return "YOU LOSS. ẤN F5 ĐỂ CHƠI LẠI";
        for (let j = 0 ;j < height; ++j){
            let sum = 0;
            for (let i= 0 ;i < height ; ++i)
                sum += piles[i][j];
            if(res === 0)  res = sum ;
            else if( res !== sum) return "YOU LOSS. ẤN F5 ĐỂ CHƠI LẠI";
        }
        return "WOW!! YOU WON";
    }
};
exports.default = game;
 