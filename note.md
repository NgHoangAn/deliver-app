## setup
firebase
    - tạo firebase database
        write: true
    
    - tạo realtime database
        write: true
    
    - tạo storage
        write: true
        folder: images/

deliver-app
    - create index.js / index.css / app.js -> start thành công
    - install tailwindcss
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
        update file index.css
        run css tailwind thàng công
    
    - npm i firebase
            framer-motion
            react-icons
            react-router-dom
    
    - create header.jsx / index.js
        + add header to app.js
        + chỉnh css header theo mobile & window-table
    - add img folder

## header
    left
        icon
        name
    right
        menu
        icon
        avatar
    create  /* -> mainContainer
            /createItem -> createContainer

## user_auth
    img avatar -> dùng motion cho smoothy
        wrap App trong AnimatePresence
        motion cho img
    tạo file .env chứa firebase
            firebase.config.js kết nối với firebase

    event onClick khi click vào avatar -> login with GG

## state provider
    dùng redux tạo state
        tạo folder context
            init.js / reducer(get_user) / state provider
        
    lấy ra user khi login trên header/avatar
    