# Pengenalan API dan Tools
Disini akan digunakan beberapa tools

# git scm
Download git-scm dari https://git-scm.com/downloads

## Get SSH Key 
to get ssh key in your computer, and put in your github or gitlab ssh key setting.

```sh
cat ~/.ssh/id_rsa.pub
```
if there is no key appears, plese generate the key also set global config of git in next section and please add the public key to your github profile.

## Generate RSA Key
Just One time for first instalation of git scm, 
```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

## Set config global
Just One time for first instalation of git scm, 

```sh
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

# Postman

1. Install postman. Pilih salah satu dari sini https://github.com/public-apis/public-apis. 
2. lakukan request ke public api dengan postman contoh : https://alexwohlbruck.github.io/cat-facts/docs/
![image](https://user-images.githubusercontent.com/11188109/218394186-d8621df9-9e04-4e7e-9d5f-bb6e84032db1.png)
3. Pilih menu </> atau code pilih javascript fetch
![image](https://user-images.githubusercontent.com/11188109/218394378-778f0deb-f3fd-4d3b-a276-1987c16bc76b.png)

# Tailwind

Untuk membuat antarmuka menggunakan komponen tailwind contoh :https://tailwindcomponents.com/component/multi-line-table

lakukan download. fork repo ini. kemudian open with code. taruh file htmlnya di folder di dalam folder site

![image](https://user-images.githubusercontent.com/11188109/218395570-c0c5b05f-27ff-44d8-8bf5-4c898f363e38.png)

fork repo

![image](https://user-images.githubusercontent.com/11188109/218396020-b9138cfb-3ffe-4998-85d3-a1a8c274e634.png)

lakukan clone repo yang di fork

![image](https://user-images.githubusercontent.com/11188109/218396201-b906ff2c-af14-4d65-b9c1-bc9f52882fe7.png)




# Menghubungkan situs dengan Public API

1. Pilih salah satu dari sini https://github.com/public-apis/public-apis. contoh : https://alexwohlbruck.github.io/cat-facts/docs/

2. lakukan fork repo ini

3. Buat folder NPM di dalam folder site
4. Buat template tailwindcss
5. 
