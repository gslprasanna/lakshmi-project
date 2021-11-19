const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    
    

        <div class="foo-con">
            <img src="images/log2.png" class="logo" alt="">
            <div class="footer-ul">

            <ul class="category">
                <li class="cat-tit">books</li>
                <li><a href="#" class="footer-link">Physics</a></li>
                <li><a href="#" class="footer-link">Chemistry</a></li>
                
                <li><a href="#" class="footer-link">Maths</a></li>
                <li><a href="#" class="footer-link">comics</a></li>
                
                
                
                <li><a href="#" class="footer-link">Computer Science & Engineering</a></li>
                <li><a href="#" class="footer-link">Electronics and Communications Engineering</a></li>
            </ul>

            </div>
           
        </div>
        <p class="footer-title">about company</p>
        <p class="info">The online bookstore system, consumers do not need to blindly go to various places to find their own books, but
            only in a computer connected to the Internet log on online bookstore system, in the search box, type you want to find
            Of the book information retrieval, you can efficiently know whether the site has its own books, if you can online direct
            purchase, if not, you can change the home bookstore to continue to search or provide advice to the seller in order to
            supply, This greatly facilitates every consumer, saving time and labor.
            The online bookstore system can not only reduce costs, save time, space, to bring convenience to everyone, but also
            to promote the development of the logistics industry, serve three purposes, mutual benefit. More importantly, in today's
            world, the increasingly close ties between countries, more frequent exchanges, the economy tends to globalization,
            which promote the future development of online bookstore system has some practical significance. </p>
            <p class="info">support emails - help@bookstore.com,
                customersupport@bookstore.com
            </p>
            <p class="info">telephone - 555 55 55 555, 190 08 90 921</p>
            <div class="foo-so">
                <div>
                <a href="#" class="soci-lk">Terms & Services</a>
                <a href="#" class="soci-lk">Privacy Page</a>
            </div>
            
            <div>
                <a href="#" class="soci-lk"> <i class="fa fa-instagram" aria-hidden="true"></i>Instagram</a>
                <a href="#" class="soci-lk"> <i class="fa fa-facebook-official" aria-hidden="true"></i>Facebook</a>
                <a href="#" class="soci-lk"> <i class="fa fa-twitter-square" aria-hidden="true"></i>Twitter</a>
            </div></div>
            
    


    
    `;
}
createFooter();