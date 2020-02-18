#ifndef __HELLOWORLD_SCENE_H__
#define __HELLOWORLD_SCENE_H__

#include "cocos2d.h"
#include "Block.h"

USING_NS_CC;

class HelloWorld : public cocos2d::Layer
{
private:

	Size visibleSize;
	int linesCount;
	bool showEnd;
	Label *timerLabel;
	Node *gameLayer;
	long startTime;
	bool timeRunning;

public:
    // there's no 'id' in cpp, so we recommend returning the class instance pointer
    static cocos2d::Scene* createScene();

    // Here's a difference. Method 'init' in cocos2d-x returns bool, instead of returning 'id' in cocos2d-iphone
    virtual bool init();  
    
    // a selector callback
    void menuCloseCallback(cocos2d::Ref* pSender);
    
    // implement the "static create()" method manually
    CREATE_FUNC(HelloWorld);

	//添加开始的黄色栏
	void addStartLine();

	//添加结束的绿色栏，占满屏幕
	void addEndLine();

	//添加普通的黑白块栏
	void addNormalLine(int lineIndex);

	//开始游戏
	void startGame();

	//方块下移
	void moveDown();

	//开始计时
	void startTimer();

	//结束计时
	void stopTimer();

	virtual void update(float dt);
};

#endif // __HELLOWORLD_SCENE_H__
