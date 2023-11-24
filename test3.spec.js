describe('Demo test', async function()  {
    it('login test' ,async () => {
       await  browser.url ('https://www.postman.com/')
        
     
        await $('//*[@id="shell_root"]/div/div[3]/div/button[2]/span').click()

    
        await browser.pause(3000)
       await $('#username').setValue('nancybhardwaj2023@gmail.com')
       await $('#password').setValue('NancyBhardwaj8987#@')
       
        await $('#sign-in-btn').click();
        await browser.pause(20000)
        //await $('.sc-pIipz hTCcCd workspace-switcher__active').click();
        //await $('.sc-pIipz.JGsWp.workspace-switcher__active').click();
        
        await $('//*[@id="app-root"]/div/div/div[7]/div/div/div[1]/div/ol/a/li/div/div[1]/div[2]/span').click();
         // for worksp.

        
        await $(`//*[@id="app-root"]/div/div/div[7]/div[1]/div[1]/div/div/div/div/div[1]/div[1]/div/div/div[2]/div[2]/div/div/div/div[1]/div/div[2]/button`).click()
        // for + 

        await $(`//*[@id="aether-popover-portal"]/div/ul/li[2]/button/span/div/span`).click()

        await browser.pause(50000);
        

        


       

       
        
    })

})