NCCAPPS
*IDENT NCCAUI   KEJ.
*/
*/ PREVENT MODVAL FROM AUTOMATICALLY ASSIGNING USER INDICES
*/ BELOW 120D. VARIOUS PRODUCTS, E.G., SES, CYBIS, AND NCCTCP, 
*/ CREATE USER ACCOUNTS WITH FIXED UI'S HAVING LOW VALUES.
*/ THIS MODSET PREVENTS AUTOMATICALLY ASSIGNED UI'S FROM
*/ CONFLICTING WITH THE FIXED INES USED BY THE PRODUCTS.
*/
*DECK MODVAL
*D 6177
          SA1    TAUI+2-1
*/        END OF MODSET.