if [[ $TRAVIS_BRANCH == 'develop' ]]; then
    echo $1
elif [[ $TRAVIS_BRANCH == 'master' ]]; then
    echo $2
else
    exit 0
fi
