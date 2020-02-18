#include "HelloWorldScene.h"

USING_NS_CC;

Scene* HelloWorld::createScene()
{
    // 'scene' is an autorelease object
    auto scene = Scene::create();
    
    // 'layer' is an autorelease object
    auto layer = HelloWorld::create();

    // add layer as a child to scene
    scene->addChild(layer);

    // return the scene
    return scene;
}

// on "init" you need to initialize your instance
bool HelloWorld::init()
{
    //////////////////////////////
    // 1. super init first
    if ( !Layer::init() )
    {
        return false;
    }

	srand(time(NULL));
    
	visibleSize = Director::getInstance()->getVisibleSize();

	gameLayer = Node::create();
	addChild(gameLayer);

	timerLabel = Label::create();
	timerLabel->setColor(Color3B::BLUE);
	timerLabel->setSystemFontSize(50);
	timerLabel->setString("0.0000");
	timerLabel->setPosition(visibleSize.width/2, visibleSize.height-100);
	addChild(timerLabel);

	//addStartLine();
	
	//addEndLine();

	startGame();

	auto listener = EventListenerTouchOneByOne::create();
	listener->onTouchBegan = [this](Touch* t, Event* e)
	{
		log("onTouch");
		auto bs = Block::getBlocks();
		Block *b;

		for(auto it = bs->begin(); it != bs->end(); it++)
		{
			b = *it;

			if(b->getLineIndex()==1&&b->getBoundingBox().containsPoint(t->getLocation()))
			{
				if(b->getColor()==Color3B::BLACK)
				{
					b->setColor(Color3B::GRAY);
					this->moveDown();
					this->startTimer();

				}
				else if(b->getColor()==Color3B::GREEN)
				{
					this->moveDown();
					this->stopTimer();
				}
				else
				{
					MessageBox("GameOver","失败");
				}
				break;
			}
		}

		return false;
	};

	Director::getInstance()->getEventDispatcher()->addEventListenerWithSceneGraphPriority(listener, this);

    return true;
}

//开始游戏
void HelloWorld::startGame()
{
	linesCount = 0;
	showEnd = false;
	timeRunning = false;

	addStartLine();
	addNormalLine(1);
	addNormalLine(2);
	addNormalLine(3);
}

//添加开始的黄色栏
void HelloWorld::addStartLine()
{
	//auto b = new Block();
	//b->createWithArgs(Color3B::YELLOW, Size(visibleSize.width,visibleSize.height/4), "", 10, Color4B::BLACK);
	auto b = Block::createWithArgs(Color3B::YELLOW, Size(visibleSize.width,visibleSize.height/4), "", 10, Color4B::BLACK);
	gameLayer->addChild(b);
	b->setLineIndex(0);
}

//添加结束的绿色栏，占满屏幕
void HelloWorld::addEndLine()
{
	auto b = Block::createWithArgs(Color3B::GREEN, visibleSize, "Game Over", 30, Color4B::BLACK);
	gameLayer->addChild(b);
	b->setLineIndex(4);
}

//添加普通的黑白块栏
void HelloWorld::addNormalLine(int lineIndex)
{
	linesCount++;

	Block *b;
	int blackIndex = rand()%4;
	for(int i=0; i<4; i++)
	{
		b = Block::createWithArgs(blackIndex == i ? Color3B::BLACK : Color3B::WHITE, Size(visibleSize.width/4-1,visibleSize.height/4-1), "", 20, Color4B::BLACK);
		b->setPosition(i*visibleSize.width/4, lineIndex*visibleSize.height/4);
		b->setLineIndex(lineIndex);
		gameLayer->addChild(b);
	}
}

//方块下移
void HelloWorld::moveDown()
{
	if(linesCount<10)
	{
		addNormalLine(4);
	}
	else if(!showEnd)
	{
		addEndLine();
		showEnd = true;
	}

	auto bs = Block::getBlocks();
	for(auto it=bs->begin(); it!=bs->end(); it++)
	{
		(*it)->moveDowm();
	}
}

void HelloWorld::update(float dt)
{
	long offset = clock()-startTime;

	timerLabel->setString(StringUtils::format("%g",((double)offset)/1000000));
}

//开始计时
void HelloWorld::startTimer()
{
	if(!timeRunning)
	{
		scheduleUpdate();
		startTime = clock();
		timeRunning = true;
	}
}

//结束计时
void HelloWorld::stopTimer()
{
	if(timeRunning)
	{
		unscheduleUpdate();
		timeRunning = false;
	}
}

void HelloWorld::menuCloseCallback(Ref* pSender)
{
#if (CC_TARGET_PLATFORM == CC_PLATFORM_WP8) || (CC_TARGET_PLATFORM == CC_PLATFORM_WINRT)
	MessageBox("You pressed the close button. Windows Store Apps do not implement a close button.","Alert");
    return;
#endif

    Director::getInstance()->end();

#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
    exit(0);
#endif
}
