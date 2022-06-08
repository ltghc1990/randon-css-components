<!-- fuck up number 1 -->

<!-- i pass the tabslength in our context so that i can use router and push to a different route using the tab length.

<!-- the issue is that with passing the tablength to compoenents is that i would have to call useRouter and use the push method anytime i need to set the current tab; creating, deleting which happens to be in different components.

what i could do instead is becuase we are using a context provider, i can jsut call useRouter and have the push method attached to our functions. that way i wouldnt have to pass anything, and wouldnt have to userouter on mulitple components -->

<!-- work on the router, right now im pushing a hardcoded link on the tabs
the hardcoded lniks are also in the dataProvider to set the current tab.
make it so that it -->
