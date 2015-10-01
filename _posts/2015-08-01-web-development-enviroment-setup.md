---
layout:   post
title:    "Setting up a Mac OS X Web Development Environment"
date:     2015-08-01 15:56:10
category: blog
tags:     web-development osx
---
I've been using a configuration similar to this for a couple of years but recently after having to set up my development machine from scratch I realised it would be useful to document the process. My workflow for web development looks something like this: Manage tools on the OS with Homebrew, use Git for project version control, Bower to manage individual projects packages, grunt for task automation and Sass for CSS preprocessing.

Feel free to use this guide however I wrote this using a fresh install of OS X 10.10 if you're not you may find there are differences.

In this guide I'll walk through setting up the following:

* [Xcode CLT](#xcode-clt)
* [Homebrew](#homebrew)
* [Git](#git)
* [RVM & Ruby](#rvm-with-ruby)
* [Node (with NPM)](#node-with-npm)
* [Yeoman (with bower, grunt-cli & gulp)](#yeoman-with-bower-grunt-cli--gulp)
* [Compass (with Sass)](#compass-with-sass)

## Set up

### Xcode CLT
Homebrew requires either Xcode or the command line tools, I choose the CLT for smaller download size however either is fine.
Download and Install the Command Line Tools:

{% highlight bash %}
$ xcode-select --install
{% endhighlight %}

### Homebrew
Install Homebrew: (http://brew.sh/)

{% highlight bash %}
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

Verify Homebrew is not sick:

{% highlight bash %}
$ brew doctor
{% endhighlight %}

### GIT

#### Install Git

{% highlight bash %}
$ brew install git
{% endhighlight %}

#### Configure GitHub with SSH

##### Step 1: Check for SSH Keys

First check if you have any existing SSH keys

{% highlight bash %}
$ ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist
{% endhighlight %}

##### Step 2: Generate a new SSH Key

If you already have an SSH key you want to use proceed to step 3 otherwise copy and paste the text below. Make sure you substitute in your GitHub email address.

{% highlight bash %}
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
# Creates a new ssh key, using the provided email as a label
{% endhighlight %}

The default settings are fine


##### Step 3: Add your SSH key to your account

Copy the SSH key to your clipboard. You may need to replace `id_rsa.pub` with the name of your key if your using an existing key or you customised your key in step 2.

{% highlight bash %}
$ pbcopy < ~/.ssh/id_rsa.pub
# Copies the contents of the id_rsa.pub file to your clipboard
{% endhighlight %}

Add the coppied key to GitHub


##### Step 4: Test the connection

{% highlight bash %}
$ ssh -T git@github.com
{% endhighlight %}

### RVM with Ruby

First disable documentation

{% highlight bash %}
$ echo "gem: --no-document" >> ~/.gemrc
{% endhighlight %}

Now you can install everything with one command

{% highlight bash %}
$ curl -L https://get.rvm.io | bash -s stable --autolibs=enabled --ruby
{% endhighlight %}

Read the [RVM installation documentation](https://github.com/rvm/rvm#installation) to see all the different options you can use.

This will take a few minutes, and once it’s done, _quit and relaunch Terminal_, then run this command:

{% highlight bash %}
$ type rvm | head -1
{% endhighlight %}

If you get `rvm is a function`, that means RVM was successfully installed.

Confirm the latest versions of RVM and Ruby were installed:

{% highlight bash %}
$ rvm -v
{% endhighlight %}

You should get `rvm 1.26.10` or higher.

{% highlight bash %}
$ ruby -v
{% endhighlight %}

You should get `ruby 2.2.0` or higher. If you get `dyld: Library not loaded: /usr/local/lib/libgmp.10.dylib`, that means something is wrong with the binary version of the latest Ruby. To fix it, reinstall your desired Ruby version by disabling the binary:

{% highlight bash %}
$ rvm reinstall 2.2.0 --disable-binary
{% endhighlight %}

Make sure your system is still ready to brew:

{% highlight bash %}
$ brew doctor
{% endhighlight %}

### Node (with NPM)
Install Node (with NPM) with Homebrew:

{% highlight bash %}
$ brew install node
{% endhighlight %}

Add the following to your bash or zsh profile:

{% highlight bash %}
export NODE_PATH=$NODE_PATH:/usr/local/lib/node_modules
export PATH="/usr/local/share/npm/bin:$PATH"
{% endhighlight %}

### Yeoman (with bower, grunt-cli & gulp)
Restart Terminal, then run:

{% highlight bash %}
$ npm install -g yo bower grunt-cli gulp
{% endhighlight %}

Yeoman is now installed with Node and NPM (http://yeoman.io/learning/index.html)

### Compass (with Sass)
Add Compass to your system gem file:

{% highlight bash %}
$ gem update --system
$ gem install compass
{% endhighlight %}

Compass requires Sass so both will be installed.

## Housekeeping

* Xcode CLT: I recommend checking for a new version once a month or so.

## Other stuff

* [Set up an AMP Stack for Local Development in OS X 10.10 Yosemite using Homebrew](https://echo.co/blog/os-x-1010-yosemite-local-development-environment-apache-php-and-mysql-homebrew)
